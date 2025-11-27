import { useQRScoutState } from '@/store/store';
import { Heart } from 'lucide-react';
import Logo4909 from '@/assets/4909_Logo_white_on_transparent.svg';

export function Footer() {
  const teamNumber = useQRScoutState(state => state.formData.teamNumber);

  return (
    <footer>
      <div className="mt-8 flex flex-col items-center justify-center p-2 gap-2">

        {/* Logo */}
        <div className="h-24 w-96 flex items-center justify-center">
          <img
            src={Logo4909}
            alt="Team 4909 Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Heart + Team number */}
        {teamNumber !== 2713 && (
          <>
            <Heart className="text-primary size-8 fill-primary" />
            <span className="text-2xl text-primary font-rhr-ns">
              {teamNumber}
            </span>
          </>
        )}
      </div>
    </footer>
  );
}
