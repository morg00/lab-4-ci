package main

import "unicode/utf8"

func Add(a, b int) int {
	return a + b
}

func Max(values []int) (int, bool) {
	if len(values) == 0 {
		return 0, false
	}

	maxValue := values[0]
	for _, value := range values[1:] {
		if value > maxValue {
			maxValue = value
		}
	}

	return maxValue, true
}

func Reverse(text string) string {
	runes := []rune(text)
	for left, right := 0, len(runes)-1; left < right; left, right = left+1, right-1 {
		runes[left], runes[right] = runes[right], runes[left]
	}
	return string(runes)
}

func IsEven(value int) bool {
	return value%2 == 0
}

func RuneCount(text string) int {
	return utf8.RuneCountInString(text)
}
