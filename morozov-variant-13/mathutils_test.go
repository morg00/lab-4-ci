package main

import "testing"

func TestAdd(t *testing.T) {
	if got := Add(13, 7); got != 20 {
		t.Fatalf("Add() = %d, want 20", got)
	}
}

func TestMax(t *testing.T) {
	got, ok := Max([]int{3, 13, 7, 9})
	if !ok || got != 13 {
		t.Fatalf("Max() = %d, %v, want 13, true", got, ok)
	}
}

func TestReverse(t *testing.T) {
	if got := Reverse("Docker"); got != "rekcoD" {
		t.Fatalf("Reverse() = %q, want %q", got, "rekcoD")
	}
}

func TestIsEven(t *testing.T) {
	if !IsEven(42) {
		t.Fatal("IsEven(42) = false, want true")
	}
}

func TestRuneCount(t *testing.T) {
	if got := RuneCount("Привет"); got != 6 {
		t.Fatalf("RuneCount() = %d, want 6", got)
	}
}
