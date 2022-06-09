import PropTypes from 'prop-types';
import { Item } from '../../classes/classes';
import s from './ShopItem.module.css';

export const ShopItemFunc = ({ item }) => (
  <div className={s.root}>
    <h2>{item.brand}</h2>
    <h1 className={s.title}>{item.title}</h1>
    <h3 className={s.description}>{item.description}</h3>
    <div className={s.descriptionFull}>{item.descriptionFull}</div>
    <div className={s.purchaseInfo}>
      <div className={s.price}>
        {item.currency}
        {item.price}
      </div>
      <button>Добавить в корзину</button>
    </div>
  </div>
);

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(Item).isRequired,
};
