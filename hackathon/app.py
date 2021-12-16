# -*- coding: utf-8 -*-

import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import sys
import logging

app = Flask(__name__)
model =  pickle.load(open('model.pkl','rb'))

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = prediction[0]

    return render_template('index.html', prediction_text='Bu siparişi üretmesi gereken fabrika: {}'.format(output))


if __name__ == "__main__":
    app.run(debug=True)