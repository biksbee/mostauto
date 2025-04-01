import { useState } from "react";
import ContactUs from "./ContactUs";

function Delivery () {

	const [activeTab, setActiveTab] = useState("EU"); // По умолчанию Европа

	const handleTabChange = (tab) => {
		if (activeTab !== tab) {
		  setActiveTab(tab);
		}
	};

    return (
        <div id="Delivery" className="delivery-container">

			<div className="delivery-container-tittle"><h5 className={activeTab === "EU" ? "active" : ""} onClick={() => handleTabChange("EU")}>ЕВРОПА</h5>
				<span>|</span>
				<h5 className={activeTab === "USA" ? "active" : ""} onClick={() => handleTabChange("USA")}>США</h5>
			</div>
				<div className="col-12 delivery-content">
					{activeTab === "EU" && (
            		<div key="eu" className="delivery-block fade-in">
						<div className="delivery-left eu">
							<div className="delivery-steps delivery-steps1"><div>6</div>Передача автомобиля заказчику и помощь в восстановлении</div>
							<div className="delivery-steps"><div>5</div>Приёмка автомобиля в Беларуси и таможенное оформление</div>
							<div className="delivery-steps delivery-steps1"><div>4</div>Доставка автомобиля в порт, загрузка в контейнер и отслеживание
								до прибытия в Беларусь
							</div>
						</div>
						<div className="delivery-right eu">
							<div className="delivery-steps delivery-steps3"><div>1</div>Оформление заявки, консультация и предварительный подбор
								автомобиля менеджером MOSTAUTO
							</div>
							<div className="delivery-steps delivery-steps2"><div>2</div>Заключение договора, подбор автомобиля по заданным требованиям и
								согласование к торгам
							</div>
							<div className="delivery-steps delivery-steps3"><div>3</div>Победа в торгах и оформление документов для оплаты и доставки
								подобранного автомобиля или поиск нового
							</div>
						</div>
					</div>
					)}

					{activeTab === "USA" && (

						<div key="usa" className="delivery-block fade-in">
					  <div className="delivery-left">
						<div className="delivery-steps delivery-steps1">
						  <div>6</div>Передача автомобиля заказчику в США
						</div>
						<div className="delivery-steps">
						  <div>5</div>Таможенное оформление в США
						</div>
						<div className="delivery-steps delivery-steps1">
						  <div>4</div>Доставка в порт США и отправка контейнера
						</div>
					  </div>
					  <div className="delivery-right">
						<div className="delivery-steps delivery-steps3">
						  <div>1</div>Оформление заявки и подбор автомобиля в США
						</div>
						<div className="delivery-steps delivery-steps2">
						  <div>2</div>Заключение договора и участие в торгах
						</div>
						<div className="delivery-steps delivery-steps3">
						  <div>3</div>Победа в торгах и подготовка к отправке
						</div>
					  </div>
					</div>
				  )}
        	</div>
		<ContactUs tittle={"ПОДБОР И ДОСТАВКА"} type={"black"}/>
    </div>
  );
}


export default Delivery;