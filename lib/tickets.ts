export type TicketStatus='Progress'|'Pending'|'Finished';
export type Ticket={id:string;category:string;priority:'P1'|'P2'|'P3'|'P4';status:TicketStatus;area:string;createdAt:string;updatedAt:string;slaHours:number;pendingMinutes:number;repeat:boolean;public:boolean;summary:string;rca?:string;capa?:string;csat?:number};
export const demoTickets:Ticket[]=[
{id:'ASP-260930-001',category:'Engineering',priority:'P2',status:'Progress',area:'Building A',createdAt:'2026-09-30T08:00:00+07:00',updatedAt:'2026-09-30T09:20:00+07:00',slaHours:4,pendingMinutes:0,repeat:false,public:true,summary:'ตรวจสอบระบบน้ำส่วนกลาง'},
{id:'ASP-260930-002',category:'Common Area',priority:'P3',status:'Pending',area:'Clubhouse',createdAt:'2026-09-29T16:00:00+07:00',updatedAt:'2026-09-30T10:00:00+07:00',slaHours:24,pendingMinutes:180,repeat:true,public:true,summary:'รออะไหล่งานพื้นที่ส่วนกลาง',rca:'อยู่ระหว่างวิเคราะห์สาเหตุ'},
{id:'ASP-260929-003',category:'Cleaning',priority:'P4',status:'Finished',area:'Lobby',createdAt:'2026-09-29T09:00:00+07:00',updatedAt:'2026-09-29T11:30:00+07:00',slaHours:48,pendingMinutes:0,repeat:false,public:true,summary:'ทำความสะอาดพื้นที่เรียบร้อย',csat:5}
];
export function agingHours(t:Ticket){return Math.max(0,(Date.now()-new Date(t.createdAt).getTime())/3600000)}
