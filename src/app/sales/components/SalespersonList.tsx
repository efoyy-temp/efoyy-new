"use client";

import React, { useState, useEffect, useMemo } from "react";
import { salesDal } from "../dal";
import { SalesPersonListResponse } from "../types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Search } from "lucide-react";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";

type SalesPerson = SalesPersonListResponse["data"]["salesPersons"][0];

export const SalespersonList: React.FC = () => {
  const { toast } = useToast();
  const [salespersons, setSalespersons] = useState<SalesPerson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [approvingId, setApprovingId] = useState<number | null>(null);

  const fetchSalespersons = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await salesDal.listUnactiveSalesPersons();
      if (response.data.salesPersons) {
        setSalespersons(response.data.salesPersons);
      }
    } catch (err) {
      setError("Failed to fetch salesperson data.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSalespersons();
  }, []);

  const handleApprove = async (id: number) => {
    setApprovingId(id);
    try {
      await salesDal.approveSalesPerson({ id: id.toString() });
      toast({
        title: "Success",
        description: "Salesperson has been approved.",
      });
      setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to approve salesperson.",
      });
      console.error(err);
    } finally {
      setApprovingId(null);
    }
  };

  const filteredSalespersons = useMemo(() => {
    return salespersons.filter(
      (sp) =>
        sp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sp.phoneNumber.includes(searchTerm),
    );
  }, [salespersons, searchTerm]);

  return (
    <div className="w-full">
      <div>
        <CardTitle>Salesperson Approval</CardTitle>
        <CardDescription>
          Review and approve new salesperson registrations.
        </CardDescription>
      </div>

      <div className="my-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : error ? (
        <p className="text-destructive text-center">{error}</p>
      ) : (
        <div className="space-y-4">
          {filteredSalespersons.length > 0 ? (
            filteredSalespersons.map((sp, index) => (
              <div key={sp.id}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <p className="font-semibold capitalize">
                      {sp.firstName} {sp.lastName}
                    </p>
                    <p className="text-sm mb-2 text-muted-foreground">
                      {sp.phoneNumber}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Registered: {formatDistanceToNow(sp.createdAt)}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleApprove(sp.id)}
                    disabled={approvingId === sp.id}
                    className="shrink-0 bg-green-600 hover:bg-green-400"
                  >
                    {approvingId === sp.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Approve"
                    )}
                  </Button>
                </div>
                {index < filteredSalespersons.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-center py-8">
              No pending approvals.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
