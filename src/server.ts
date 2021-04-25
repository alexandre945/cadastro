import { http } from "./http";
import  "./websocket/client";

http.listen(8081, () =>  console.log('servidor rodando na porta localhost:8081'));