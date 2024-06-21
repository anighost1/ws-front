// utils/useWebSocket.ts
import { useEffect, useState } from 'react';

const useWebSocket = (url: string) => {
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log('WebSocket connected.');
            setWs(socket);
        };

        socket.onmessage = (event) => {
            // console.log('Message from server:', event.data);
            const parsedData = JSON.parse(event.data);
            setData(parsedData);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed.');
            setWs(null);
        };

        // Clean up function to close WebSocket connection when component unmounts
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [url]);

    return data;
};

export default useWebSocket;
