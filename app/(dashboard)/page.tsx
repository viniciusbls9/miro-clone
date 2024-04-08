"use client";

import React from "react";
import { EmptyOrg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";

const DashboardPage: React.FC = () => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <p>board list</p>}
    </div>
  );
};

export default DashboardPage;
