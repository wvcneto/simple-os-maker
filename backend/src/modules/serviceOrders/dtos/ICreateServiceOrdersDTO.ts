export default interface ICreateServiceOrdersDTO {
  description: string;
  service_id: string;
  client_id: string;
  responsible_id: string;
  requester_id: string;
  deadline: Date;
}
