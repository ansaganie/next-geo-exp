import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/shared/ui/card";
import { Service } from "@/entities/service/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full">
      <CardContent className="flex flex-col items-center gap-3 p-4 text-center">
        <Image src={service.icon} alt={service.title} width={56} height={56} />
        <h4 className="text-sm font-semibold leading-tight">{service.title}</h4>
        <p className="text-xs text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}
