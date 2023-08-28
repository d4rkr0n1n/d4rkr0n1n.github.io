#!/bin/bash
touch /home/ubuntu/test
sudo apt-add-repository ppa:ansible/ansible -y
echo "repo" >> /home/ubuntu/test
sudo apt update -y
echo "update" >> /home/ubuntu/test
sudo apt install ansible -y
echo "ansible" >> /home/ubuntu/test
