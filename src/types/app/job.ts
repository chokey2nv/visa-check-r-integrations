/**
 * type Job struct {
	ID        string
	Type      string
	Status    Status
	Progress  int
	Message   string
	Result    any
	Error     string
	CreatedAt time.Time
	UpdatedAt time.Time
}
 */

export interface Job<T = any> {
    id: string;
    type: string;
    status: string;
    progress: number;
    message: string;
    result: T;
    error: string;
    createdAt: string;
    updatedAt: string;
}