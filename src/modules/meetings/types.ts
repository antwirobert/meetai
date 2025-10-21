import { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";

export type MeetingGetMany = inferRouterOutputs<AppRouter>["meetings"]["getMany"]["items"]
export type MeetingGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"]
export enum MeetingStatus {
    Upcoming = "upcoming",
    Active = "active",
    Completed = "completed",
    Processing = "processing",
    Cancelled = "cancelled"
}
