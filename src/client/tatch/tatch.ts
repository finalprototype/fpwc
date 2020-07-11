import { minBy, sortBy, uniq } from 'lodash';

interface Word {
  word: string,
  occurrences: number;
  firstOccurrenceIndex: number;
  dedup: string[];
  score: number;
  scoreUnique: number;
}

interface Letters {
  [key: string]: number;
}

interface Counts {
  words: Word[];
  letters: Letters;
  lettersUnique: Letters;
}

export function toWordList(source: string): string[] {
  const strippedSymbols: string[] = source
    .replace(/\'/g, '')
    .replace(/\r?\n|\r|[^0-9a-z ]/gi, ' ')
    .trim()
    .replace(/\s+/g, ',')
    .toLowerCase()
    .split(',')
  return strippedSymbols;
}

export function getCounts(wordList: string[]): Counts {
  const letters: Letters = {};
  const lettersUnique: Letters = {};
  const words: Word[] = Object.values(
    wordList.reduce((map, val, idx) => {
      map[val] = map[val] || {
        word: val,
        occurrences: 0,
        score: 0,
        scoreUnique: 0,
        dedup: val.replace(/(.)(?=.*\1)/g, '').split(''),
        firstOccurrenceIndex: 0,
      };
      map[val].occurrences += 1;
      if (map[val].occurrences === 1) {
        map[val].firstOccurrenceIndex = idx;
      }
      map[val].dedup
        .forEach(l => {
          letters[l] = (letters[l] || 0) + 1;
          if (map[val].occurrences === 1) {
            lettersUnique[l] = (lettersUnique[l] || 0) + 1;
          }
        });
      return map;
    }, {} as { [key: string]: Word })
  ).map(w => {
    w.dedup.forEach(l => {
      w.score += letters[l];
      w.scoreUnique += lettersUnique[l];
    });
    return w;
  });

  return {
    lettersUnique,
    letters,
    words: Object.values(words)
  };
}

export function findLowestScoringWord(
  words: Word[],
  unique = false,
) {
  const scoreField = unique ? 'score' : 'scoreUnique';
  const sorted = sortBy(words, scoreField);
  const found = [sorted[0]];
  for(let i = 1; i < words.length; i++) {
    if (sorted[i][scoreField] > sorted[0][scoreField]) {
      break;
    }
    found.push(sorted[i]);
  }

  if (found.length > 1) {
    return sortBy(found, 'firstOccurrenceIndex')[0]
  }

  return found[0]
}

export function scoreDocumentWords(
  source: string,
  uniqueWordScoring = false,
  verbose = false,
) {
  const wordList = toWordList(source);
  const { words, letters, lettersUnique } = getCounts(wordList);
  const lowestScoringWord = findLowestScoringWord(words, uniqueWordScoring === true)

  if (verbose) {
    console.log('lowest scoring word:', lowestScoringWord));
    console.log('letters in unique scoring:', lettersUnique)
    console.log('letters in reccurring scoring:', letters);
    console.log('word bank:', words);
    console.log('sanitized word list:', wordList);
  }

  return lowestScoringWord.word;
}
