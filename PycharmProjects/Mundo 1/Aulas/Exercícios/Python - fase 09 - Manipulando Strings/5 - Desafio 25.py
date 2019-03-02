#!/bin/bash env python3
# -*- coding: utf-8 -*-
# Crie um programa que leia o nome de uma pessoa e diga se ela tem "SILVA" no nome.
w = str(input('Cite o nome de uma pessoa que tenha SILVA: ')).strip().upper()
print('Existe Silva no nome: {}'.format('SILVA' in w))


