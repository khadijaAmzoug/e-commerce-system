
export class AppError extends Error {
  constructor(public message: string, public statusCode?: number) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(`AppError: ${error.message} (Status: ${error.statusCode || 'N/A'})`);
  } else if (error instanceof Error) {
    console.error(`General Error: ${error.message}`);
  } else {
    console.error("An unknown error occurred:", error);
  }
}
