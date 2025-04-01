import ContactUs from "./ContactUs";


function Main() {
    return (
        <div className="main">
            <h1>ПОЧЕМУ СТОИТ<br/>ДОВЕРИТЬСЯ <b>MOSTAUTO</b></h1>
            <div className="main-content">
                <div className="main-container">
                    <div className="main-content-top">
                        <div className="main-content-1"><div className="main-content-number">1</div>Официальное заключение договора и защита ваших покупательских прав согласно законодательству Республики Беларусь</div>
                        <div className="main-content-2"><div className="main-content-number">2</div>Экономия ваших нервов, сил и времени на организацию покупки, доставки и растаможки автомобиля, а также правильном оформлении документов</div>
                    </div>
                    <div className="main-content-bottom">
                        <div className="main-content-3"><div className="main-content-number">3</div>Честный подбор по проверенным базам данных с отчетами историй ДТП и сотрудничество только с надёжными продавцами и страховыми аукционами</div>
                        <div className="main-content-4"><div className="main-content-number">4</div>Консультация по подобру запчастей для вашего автомобиля как с внутреннего так и с внешних рынков</div>
                    </div>
                </div>
            </div>
			<ContactUs tittle={"ГЛАВНАЯ"} />
        </div>
    )
}

export default Main;