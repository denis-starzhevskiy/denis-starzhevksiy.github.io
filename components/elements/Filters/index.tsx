import React from 'react';
import s from './Filters.module.scss';
import Checkbox from '@/components/elements/CheckBox';
import Accordion from '@/components/elements/Accordion';
import RadioGroup from '@/components/elements/RadioGroup';
import clsx from 'clsx';

type FiltersProps = {};

const Filters = ({}: FiltersProps) => {
  return (
    <div>
      <h3 className={s.filtersTitle}>Фільтри</h3>
      <Accordion
        title={'Мова оригіналу'}
        content={['Англійська', 'Французька', 'Італійська', 'Німецька'].map((item) => (
          <Checkbox key={item} label={item} name={'language'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Обмеження за віком 18+'}
        content={
          <RadioGroup
            options={['Так', 'Ні'].map((item) => ({ label: item, value: item }))}
            value={'Так'}
          />
        }
      />
      <Accordion
        title={'Тип'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'type'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Жанри'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'genre'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Теги'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'genre'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Фендом'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'fandom'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Виключити жанри'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'excluded genre'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Виключити теги'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'excluded tag'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Виключити фендоми'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'excluded fandom'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Без фендомів'}
        content={
          <RadioGroup
            options={['Так', 'Ні'].map((item) => ({ label: item, value: item }))}
            value={'Так'}
          />
        }
      />
      <Divider />
      <Accordion
        title={'Кількість розділів'}
        content={
          <div className={s.numberInputsContainer}>
            <label>
              <span>від</span>
              <input type="text" className={clsx('input', s.numberInput)} />
            </label>
            <label>
              <span>до</span>
              <input type="text" className={clsx('input', s.numberInput)} />
            </label>
          </div>
        }
      />
      <Divider />
      <Accordion
        title={'Кількість сторінок'}
        content={
          <div className={s.numberInputsContainer}>
            <label>
              <span>від</span>
              <input type="text" className={clsx('input', s.numberInput)} />
            </label>
            <label>
              <span>до</span>
              <input type="text" className={clsx('input', s.numberInput)} />
            </label>
          </div>
        }
      />
      <Divider />
      <div>
        {[
          'Готові на 100%',
          'Доступні для скачування',
          'Завершені проекти',
          'Розпродаж',
          'Тільки непереглянуті',
          'Не показувати закладки',
          'Тільки онгоінги',
        ].map((item) => (
          <Checkbox key={item} label={item} name={'other filters'} />
        ))}
      </div>
    </div>
  );
};

const Divider = () => <div style={{ height: 1, backgroundColor: '#A5ACBD', margin: '20px 0' }} />;

export default Filters;