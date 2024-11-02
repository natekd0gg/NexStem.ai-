"use client";

import Image from "next/image";
import imageAsset from "../app/public/icon.png";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  Zap,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { useProModal } from "@/hooks/use-pro-modal";
import { Button } from "./ui/button";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard",
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const proModal = useProModal();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex-items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src={imageAsset} />
          </div>
        </Link>
        <h1 className={cn("text-2xl font-bold", montserrat.className)}>Stem</h1>
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 round-lg transition",
                  pathName === route.href
                    ? "text-white hover:bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-3">
        <Card className="bg-white/10 border-0">
          <CardContent className="py-4">
            <div className="text-center text-sm text-white space-y-2">
              <Button
                onClick={proModal.onOpen}
                className="w-full"
                variant="premium"
              >
                Upgrade
                <Zap className="w-4 h-4 ml-2 fill-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
