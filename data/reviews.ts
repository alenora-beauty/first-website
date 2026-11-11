export interface ReviewItem {
  id: string;
  clientName: string;
  serviceReceived: string;
  rating: number; // 1-5
  date: string;
  quote: string;
  fullReview?: string;
  avatarUrl?: string;
}

/**
 * Reviews array ships EMPTY as Alenora Beauty Studio has no published online reviews yet.
 * Do NOT add fake reviews, star ratings, or testimonials.
 * Once verified Google / client reviews are received, add them to this array and set
 * `showReviews: true` in `/data/site.ts`.
 */
export const clientReviews: ReviewItem[] = [];

