import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/shared/ui/card";
import { Service } from "@/entities/service/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group h-full border-border/60 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 hover:-translate-y-1 hover:border-secondary/30">
      <CardContent className="flex flex-col items-center gap-4 p-5 text-center">
        <div className="rounded-xl bg-muted p-3 transition-colors duration-300 group-hover:bg-secondary/10">
          <Image
            src={service.icon}
            alt={service.title}
            width={48}
            height={48}
          />
        </div>
        <h4 className="text-sm font-semibold leading-tight text-foreground">
          {service.title}
        </h4>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </CardContent>
    </Card>
  );
}
