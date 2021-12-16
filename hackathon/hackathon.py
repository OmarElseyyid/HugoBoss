# -*- coding: utf-8 -*-
"""
Created on Wed Dec 15 23:16:30 2021

@author: AYŞE BAYRAK
"""

import pandas as pd 
import numpy as np
from sklearn.metrics import confusion_matrix
from sklearn.linear_model import LogisticRegression
veriler = pd.read_excel('Hugo Boss.xls')

#Encoder:Kategorik -> Numeric
factory=veriler.iloc[:,2:3].values
time=veriler.iloc[:,3:4].values
productName=veriler.iloc[:,4:5].values
stock=veriler.iloc[:,5:6]
from sklearn import preprocessing
#1,2,3 :LabelEncoder() 

le=preprocessing.LabelEncoder()
time[:,0]=le.fit_transform(veriler.iloc[:,3])

productName[:,0]=le.fit_transform(veriler.iloc[:,4])

#numpy dizileri dataframe donusumu
sonuc=pd.DataFrame(data=time, index=range(7491),columns=['Time'])
sonuc2=pd.DataFrame(data=productName, index=range(7491),columns=['ProductName'])
y=pd.DataFrame(data=factory,index=range(7491),columns=["Factory"])
Y=y.values

#dataframe birleştirme işlemi axis:yanına yerleştiriyor default olarak altına verileri yerleştiriyor
s=pd.concat([sonuc,sonuc2],axis=1)

x=pd.concat([s,stock],axis=1)
X=x.values

from sklearn.model_selection import train_test_split

x_train, x_test,y_train,y_test = train_test_split(X,Y,test_size=0.33, random_state=0)

from sklearn.preprocessing import StandardScaler

sc=StandardScaler()

X_train = sc.fit_transform(x_train)
X_test = sc.transform(x_test)


from sklearn.neighbors import KNeighborsClassifier

knn = KNeighborsClassifier(n_neighbors=4, metric='minkowski')
knn.fit(X_train,y_train)

y_pred = knn.predict(X_test)

cm = confusion_matrix(y_test,y_pred)
print("KNN")
print(cm)

#Random Forest Classification

#default olarak gini fonksiyonunu alır logaritma hesabını
#yapmadan formule koyar
#entropy log olarak formüle koyup yapıyor 
#Sonucu çok etkilemez
from sklearn.ensemble import RandomForestClassifier
rfc = RandomForestClassifier(n_estimators=11, criterion = 'entropy')
rfc.fit(X_train,y_train)

y_pred = rfc.predict(X_test)
cm = confusion_matrix(y_test,y_pred)
print('RFC')
print(cm)
2428
print(rfc.predict([[9,7,250]]))