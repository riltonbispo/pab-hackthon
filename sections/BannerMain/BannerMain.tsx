const BannerMain = () => {
  return (
    <div className="bg-slate-100 banner__main ">
      <div className="px-20 mx-auto banner__content min-h-screen">
        <section className="flex justify-between">
          <div>
            <span>25% off para membros</span>
            <h2>
              Estoques renovados
            </h2>
            <p>
              membros: façam login e use o cupom FLASH para receber 25% de
              desconto em produtos selecionados.
            </p>
            <button>Quero garantir!</button>
          </div>
          <div>
            <p>Em até 12x sem juros*</p>
            <span>*para membros</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BannerMain;
