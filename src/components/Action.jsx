export function like() {
  return {
    type: Like,
  };
}

export function dislike() {
  return {
    type: Dislike,
  };
}

export const Like = "LIKE";
export const Dislike = "DISLIKE";
