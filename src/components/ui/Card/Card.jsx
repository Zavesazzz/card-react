import Stepper from "../Stepper/Stepper";
/**
 * Компонент карточка.
 * @param {object} props - Свойства компонента.
 * @param {object} props.details - Детали карточки.
 * @param {string} props.details.id - Идентификатор карточки.
 * @param {string} props.details.title - Название карточки.
 * @param {string} props.details.category - Категория карточки (необязательно).
 * @param {string} props.details.description - Описание карточки (необязательно).
 * @param {string} [props.details.price] - Цена карточки (необязательно).
 * @param {number} [props.details.rating] - Рейтинг карточки (необязательно).
 * @param {string} props.details.imgSrc - Путь к изображению.
 * @param {function} props.onClick - Обработчик клика по карточке (необязательно).
 * @param {function} props.onStepperUpdate - Обработчик клика по Stepper.
 * @returns {JSX.Element} Элемент JSX.
 */
export const Card = (props) => {
	const {
		id,
		title,
		price,
		rating,
		imgSrc,
		isFavorite,
		discount,
		oldPrice,
		nameGame,
	} = props.details;

	const { onBtnClick, onStepperUpdate, onToggleFavorite } = props;

	// Обработчик клика по карточке для передачи id в компонент родитель
	const handleBtnClick = () => onBtnClick(id);

	// Обработчик клика на иконку сердечка
	const handleFavorite = () => onToggleFavorite(id);

	// Обработчик обновления значения в Stepper
	const handleQuantityUpdate = (value) => {
		// value будет получен в момент изменения значения в компоненте Stepper
		onStepperUpdate(id, value);
	};

	return (
		<div className="mr-5">
			<div className="relative rounded-md">
				<img
					className="max-w-72 max-h-96 rounded-2xl"
					src={imgSrc}
					alt={title}
				/>
				<div className="absolute top-0 left-0 w-full h-full opacity-30 transition-opacity duration-300 hover:opacity-50"></div>
				{price && (
					<div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
						НОВИНКА
					</div>
				)}
			</div>
			<div className="">
				<h3 className="text-white font-medium mb-2">{title}</h3>
				<div className="flex justify-between items-end mb-5">
					{price && <p className="text-white text-2xl">{price + " Р"}</p>}
					{discount && <p className="text-red-500 text-lg">{discount + "%"}</p>}
					{oldPrice && (
						<p className="text-white text-lg text-opacity-20">
							{oldPrice + " P"}
						</p>
					)}
				</div> 
				{nameGame && <p className="text-white text-sm mb-4">{nameGame}</p>}
        <div className="flex items-center">
				<p className="text-white text-sm mb-4 text-opacity-20 mr-2">Ключ</p>
				<p className="text-white text-sm mb-4 text-opacity-20">Аккаунт Steam</p>
        </div>
			</div>
		</div>
	);
};
