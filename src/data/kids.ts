import type { Kid, KidId } from '../types/content';
import type { ChildRow, SubjectRow } from '../types/db';
import { boardLabel } from '../types/db';
import { defaultSubjectsForGrade } from './defaultSubjects';

export function childToKid(child: ChildRow, subjects?: SubjectRow[]): Kid {
  const subjectDefs = subjects?.length
    ? subjects.map((s) => ({ id: s.id, label: s.name, icon: s.icon }))
    : defaultSubjectsForGrade(child.grade);

  const isIshanvi = child.name.toLowerCase().includes('ishanvi');
  const isAadya = child.name.toLowerCase().includes('aadya');

  return {
    id: child.id as KidId,
    name: child.name.replace(' (Demo)', ''),
    grade: child.grade,
    board: boardLabel(child.board),
    subjects: subjectDefs,
    mascot: isIshanvi
      ? { name: 'Arjuna', avatar: 'arjuna-guru', role: 'Wise guru guide' }
      : isAadya
        ? { name: 'Chiku', avatar: 'emoji', emoji: '🐰', role: 'Bunny buddy' }
        : { name: 'Guide', avatar: 'emoji', emoji: '🌟', role: 'Learning buddy' },
  };
}

export function kidsFromChildren(
  children: ChildRow[],
  subjectsByChild: Record<string, SubjectRow[]>
): Kid[] {
  return children.map((c) => childToKid(c, subjectsByChild[c.id]));
}

/** Local demo kids for the DEV-only offline preview (no Supabase needed). */
export function devPreviewKids(): Kid[] {
  return [
    {
      id: 'ishanvi' as KidId,
      name: 'Ishanvi',
      grade: 'Grade 4',
      board: 'IB',
      subjects: defaultSubjectsForGrade('Grade 4'),
      mascot: { name: 'Arjuna', avatar: 'arjuna-guru', role: 'Wise guru guide' },
    },
    {
      id: 'aadya' as KidId,
      name: 'Aadya',
      grade: 'Grade 2',
      board: 'CBSE · Cambridge',
      subjects: defaultSubjectsForGrade('Grade 2'),
      mascot: { name: 'Chiku', avatar: 'emoji', emoji: '🐰', role: 'Bunny buddy' },
    },
  ];
}
