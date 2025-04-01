import { useState } from "react";

function Delivery_1() {
  const [activeTab, setActiveTab] = useState("EU"); // По умолчанию Европа

  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div id="Delivery" className="delivery-container">
      <div className="row">
        <h5
          className={activeTab === "EU" ? "active" : ""}
          onClick={() => handleTabChange("EU")}
        >
          ЕВРОПА
        </h5>
        <span>|</span>
        <h5
          className={activeTab === "USA" ? "active" : ""}
          onClick={() => handleTabChange("USA")}
        >
          США
        </h5>

        <div className="col-12 delivery-content">
          {activeTab === "EU" && (
            <div key="eu" className="delivery-block fade-in">
              <div className="delivery-left">
                <div className="delivery-steps">
                  <div>6</div>Передача автомобиля заказчику и помощь в восстановлении
                </div>
                <div className="delivery-steps">
                  <div>5</div>Приёмка автомобиля в Беларуси и таможенное оформление
                </div>
                <div className="delivery-steps">
                  <div>4</div>Доставка автомобиля в порт, загрузка в контейнер и отслеживание до прибытия в Беларусь
                </div>
              </div>
              <div className="delivery-right">
                <div className="delivery-steps">
                  <div>3</div>Оформление заявки, консультация и предварительный подбор автомобиля
                </div>
                <div className="delivery-steps">
                  <div>2</div>Заключение договора, подбор автомобиля по требованиям и согласование к торгам
                </div>
                <div className="delivery-steps">
                  <div>1</div>Победа в торгах и оформление документов
                </div>
              </div>
            </div>
          )}

          {activeTab === "USA" && (
            <div key="usa" className="delivery-block fade-in">
              <div className="delivery-left">
                <div className="delivery-steps">
                  <div>6</div>Передача автомобиля заказчику в США
                </div>
                <div className="delivery-steps">
                  <div>5</div>Таможенное оформление в США
                </div>
                <div className="delivery-steps">
                  <div>4</div>Доставка в порт США и отправка контейнера
                </div>
              </div>
              <div className="delivery-right">
                <div className="delivery-steps">
                  <div>3</div>Оформление заявки и подбор автомобиля в США
                </div>
                <div className="delivery-steps">
                  <div>2</div>Заключение договора и участие в торгах
                </div>
                <div className="delivery-steps">
                  <div>1</div>Победа в торгах и подготовка к отправке
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Delivery_1;
