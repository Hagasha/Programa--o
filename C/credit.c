#include <cs50.h>
#include <stdio.h>

bool check_luhn(long card);
string get_card_type(long card);

int main(void)
{
    long card = get_long("Number: ");
    if (check_luhn(card))
    {
        printf("%s\n", get_card_type(card));
    }
    else
    {
        printf("INVALID\n");
    }
}

bool check_luhn(long card)
{
    int sum = 0;
    bool alternate = false;
    while (card > 0)
    {
        int digit = card % 10;
        if (alternate)
        {
            digit *= 2;
            if (digit > 9)
            {
                digit -= 9;
            }
        }
        sum += digit;
        alternate = !alternate;
        card /= 10;
    }
    return (sum % 10) == 0;
}

string get_card_type(long card)
{
    if ((card >= 340000000000000 && card < 350000000000000) || (card >= 370000000000000 && card < 380000000000000))
    {
        return "AMEX";
    }
    else if (card >= 5100000000000000 && card < 5600000000000000)
    {
        return "MASTERCARD";
    }
    else if ((card >= 4000000000000 && card < 5000000000000) || (card >= 4000000000000000 && card < 5000000000000000))
    {
        return "VISA";
    }
    else
    {
        return "INVALID";
    }
}