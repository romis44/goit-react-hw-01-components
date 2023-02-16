import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatSection>
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
}
