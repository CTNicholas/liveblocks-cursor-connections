"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@/liveblocks.config";
import { useParams } from "next/navigation";
import { ClientSideSuspense } from "@liveblocks/react";
import { Loading } from "@/components/Loading";

export default function Room({ children }: { children: ReactNode }) {
  const { roomId } = useParams();

  return (
    <RoomProvider
      id={roomId as string}
      initialPresence={{ cursor: { x: -10, y: -10 }, color: "" }}
      initialStorage={{}}
    >
      <ClientSideSuspense fallback={<Loading />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
