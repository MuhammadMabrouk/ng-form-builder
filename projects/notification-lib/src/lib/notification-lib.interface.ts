export interface Notification {
  title: string;
  description: string;
  type: 'info' | 'success' | 'warning' | 'danger';
}
