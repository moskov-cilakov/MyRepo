export type CustomerQueue = {
  createdAt: Date;
  duration: number | null;
  id: string;
  queueNumber: number | null;
  serviceType?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
