"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useWebSocket from "@/utils/websocket";

export default function Home() {
  const data = useWebSocket("ws://127.0.0.1:4032");

  return (
    <div className="flex justify-center items-center mt-10">
      <Card className="w-[80%] flex flex-col justify-center items-center p-10 gap-2">
      <Badge variant="outline">Totall Count : {data?.totalCount}</Badge>
        {data?.data.map((item:any,index:number)=>(
        <Badge 
            className="w-[20%] min-w-32 h-10 flex justify-center items-center" 
            key={index} 
            variant="secondary"
        >
            {item?.number}
        </Badge>
        ))}
      </Card>
    </div>
  );
}
