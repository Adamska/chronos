import { type GridPoint, type SolverGrid, type SolverModel, solveTravelGrid } from "@/geo/travelSolver";

interface SolveRequest {
  readonly id: number;
  readonly grid: SolverGrid;
  readonly origin: GridPoint;
  readonly model: SolverModel;
}

interface WorkerScope {
  onmessage: ((event: MessageEvent<SolveRequest>) => void) | null;
  postMessage(message: unknown, transfer?: Transferable[]): void;
}

const scope = self as unknown as WorkerScope;

scope.onmessage = (event) => {
  const { id, grid, origin, model } = event.data;
  void solveTravelGrid(grid, origin, model).then((days) => {
    if (days) scope.postMessage({ id, days }, [days.buffer]);
  });
};
