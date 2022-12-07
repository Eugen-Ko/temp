import React, { FC } from 'react';
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFiguresComponent: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3 className="lost-title">{title}</h3>
      {figures.map(figure => (
        <div className="lost-Figure" key={figure.id}>
          {figure.name}
          {figure.logo && <img src={figure.logo} alt={figure.name} />}
        </div>
      ))}
    </div>
  );
};

export default LostFiguresComponent;
