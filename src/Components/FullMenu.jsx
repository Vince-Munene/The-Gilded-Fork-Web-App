export default function FullscreenMenu({ onClose }) {
  return (
    <div id="fullscreen-menu" className="fixed h-screen inset-0 bg-paleyellow z-50 flex flex-col overflow-y-auto">
      <div className="flex justify-between items-center p-6">
        <h4 className="font-jaro text-3xl">Menu</h4>
        <button onClick={onClose} className="text-3xl">&times;</button>
      </div>

      {/* Starters Section */}
      <section className="bg-paleyellow">
        <h4 className="font-jaro text-2xl px-14 py-4">Starters</h4>
        <div className="flex flex-wrap flex-row justify-between px-14 py-8 gap-8">
          {/* Repeat this block for each starter */}
          <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
            <img src="/images/trio-of-buscheta.jpg" alt="Trio Of Buscheta" className="rounded-2xl w-60 h-44" />
            <h4 className="font-jaro text-2xl">Trio Of Buscheta</h4>
            <p className="font-inder">Toasted artisan bread with three toppings: classic tomato & basil, wild mushroom & truffle oil, and whipped ricotta with honey & pistachio.</p>
          </div>
          {/* ...other starters */}
        </div>
      </section>

      {/* Repeat for Mains, Desserts, Drinks... */}
    </div>
  );
}
