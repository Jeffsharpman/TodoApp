import LogoImage from "../../assets/logo.svg";

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="
          flex h-16 w-16 items-center justify-center
          rounded-2xl
          border border-line
          bg-card
          p-1
          shadow-lg
          transition-all duration-300
        "
      >
        <img
          src={LogoImage}
          alt="Sharpman Logo"
          className="h-[96%] w-[96%] object-contain"
          draggable={false}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML =
              '<span class="text-ink font-mono text-xl font-bold">JS</span>';
          }}
        />
      </div>

      <div className="leading-none">
        <h1 className="font-['Bebas_Neue'] text-2xl font-semibold tracking-[0.2em] text-ink">
          SHARP<span className="text-primary">MAN</span>
        </h1>

        <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.35em] text-muted">
          DESIGN. CODE. <span className="text-primary">ELEVATE</span>.
        </p>
      </div>
    </div>
  );
}

export default Logo;
