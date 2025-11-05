import { meetingsRouter } from '@/modules/meetings/server/procedures';
import { createTRPCRouter } from '../init';
import { agentsRouter } from '@/modules/agents/server/procedures';
import { testRouter } from '@/modules/test/server/procedures';
export const appRouter = createTRPCRouter({
  
  agents: agentsRouter,
  meetings: meetingsRouter,
  test: testRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;