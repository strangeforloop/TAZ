// Root layout: a clean monochrome landing screen for TAZ with a single
// call-to-action that opens the Give/Take modal. The boards are out of scope
// for this slice — nothing is listed here yet.

import { useState } from "react";
import GiveTakeModal from "./GiveTakeModal";
import { Button } from "./components/ui/button";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-black">
      <main className="flex max-w-md flex-col items-center text-center">
        <h1 className="text-7xl font-extrabold uppercase tracking-tighter">TAZ</h1>
        <p className="mt-3 text-lg font-bold uppercase tracking-widest text-neutral-600">
          Give &amp; Take Board
        </p>
        <p className="mt-4 text-base text-neutral-700">
          A mutual-aid board for the community. Offer what you have, ask for what
          you need.
        </p>

        <Button
          size="lg"
          variant="inverse"
          className="mt-8"
          onClick={() => setModalOpen(true)}
        >
          + Give or Take
        </Button>
      </main>

      {modalOpen && <GiveTakeModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
