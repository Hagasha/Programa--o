import pandas as pd

df1 = pd.DataFrame({'Coluna': [1, 2, 3, 4, 5],
                    'valor1': ['A', 'B', 'C', 'D', 'E'],})

df2 = pd.DataFrame({'Coluna': [1, 2, 3, 4, 5],
                    'valor2': ['F', 'G', 'H', 'I', 'J'],})

df3 = pd.merge(df1, df2, on='Coluna', how='left')
print(df3)
