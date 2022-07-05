import React from "react";
import PropTypes from 'prop-types';
import {Notification} from "components/Notification/Notification";
import { FeedbackArea, ButtonGreen, ButtonRed, ButtonYellow } from "components/FeedbackOptions/FeedbackOptions.styled";

export const Statistics = ({ data }) => {
    const { good, neutral, bad } = data;                // витягуємо значення змінних з об'єкту
    const total = good + neutral + bad;                 // рахуємо загальну кількість кліків
    const positive = Math.round((good / total) * 100);  // рахуємо процент позитивних

    return (
        total ?
        // якщо є кліки, то створюємо блок. Стилі в блоках статистика та кнопки - з одного файлу, бо повторюються
            <div>
                <h3>Statistic</h3>
                <FeedbackArea> 
                    <ButtonGreen size='10px'><span>{good}</span></ButtonGreen>
                    <ButtonYellow><span>{neutral}</span></ButtonYellow>
                    <ButtonRed><span>{bad}</span></ButtonRed>
                </FeedbackArea>
                
                <p>Total: <span>{total}</span></p>
                <p>Positive feedback: <span>{positive || 0}%</span></p>
            </div> :
            <Notification message={"There is no feedback"} />       // якщо кліків немає, то показуємо повідомлення
    )
}

Statistics.propTypes = {
    data: PropTypes.object.isRequired
}