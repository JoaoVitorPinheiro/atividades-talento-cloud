'''Atividade 4, regar somente os tomates:
 0,1,4,5. 
'''
print('Dia de regar apenas os tomates:')

for robo_regador in range(6):
  
    if robo_regador == 2 or robo_regador == 3:
        continue
    robo_regador = str(robo_regador)
    print('Rega a planta ' + robo_regador)