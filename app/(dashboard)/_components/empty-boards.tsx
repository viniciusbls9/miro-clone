"use client";

import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";

import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
  const { organization } = useOrganization();

  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({ title: "untitled", orgId: organization?.id });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />

      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};