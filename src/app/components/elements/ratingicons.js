import Image from 'next/image';

import YelpReview from '@/app/assets/review-yelp.png';
import MichelinReview from '@/app/assets/review-michelin.png';
import GoogleReview from '@/app/assets/review-google.png';

function Ratings({ iconGap, iconSize}) {
  return (
    <div aria-label="Social media links" style={{ display: "flex", gap: iconGap, justifyContent: "center" }}>
      <Image src={YelpReview} alt="Yelp 5 star review" width={iconSize} height={iconSize} />
      <Image src={MichelinReview} alt="Michelin 2024" width={iconSize} height={iconSize} />
      <Image src={GoogleReview} alt="Google 5 star review" width={iconSize} height={iconSize} />
    </div>
  );
}

export default Ratings;