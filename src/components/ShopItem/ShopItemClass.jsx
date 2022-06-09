/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '../../classes/classes';
import s from './ShopItem.module.css';

export class ShopItemClass extends React.Component {
  static propTypes = { item: PropTypes.instanceOf(Item).isRequired };

  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
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
  }
}
