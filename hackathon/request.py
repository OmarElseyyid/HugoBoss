# -*- coding: utf-8 -*-

import requests

url = 'http://localhost:5000/predict'
r = requests.post(url,json={'date':2, 'count':9, 'product_name':6})

print(r.json())