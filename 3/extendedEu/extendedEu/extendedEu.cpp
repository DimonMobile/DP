// extendedEu.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

int gcd(int a, int b, int& x, int& y) {
	if (a == 0) {
		x = 0; y = 1;
		return b;
	}
	int x1, y1;
	int d = gcd(b % a, a, x1, y1);
	x = y1 - (b / a) * x1;
	y = x1;
	return d;
}

int main(int argc, char **argv)
{
	int a = atoi(argv[1]);
	int b = atoi(argv[2]);
	int x, y;
	gcd(a, b, x, y);
	std::cout << x << " " << y << std::endl;
}
