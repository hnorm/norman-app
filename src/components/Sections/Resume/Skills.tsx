import { FC, memo, PropsWithChildren, useMemo } from 'react';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-left text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, level, max = 10 } = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-row">
      <span className="ml-2 text-sm font-medium w-1/2">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300 self-center">
        <div className="h-full rounded-full bg-yellow" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
