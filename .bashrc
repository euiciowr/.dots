export PATH="/usr/share/neo4j/bin/:$PATH"

# jdk
export JAVA_HOME=/opt/jdk
export PATH=$JAVA_HOME/bin:$PATH


# Apache Spark
# export PATH=$PATH:/opt/spark/bin
export SPARK_HOME=/opt/spark
export PATH=$SPARK_HOME/bin:$PATH
export PYSPARK_DRIVER_PYTHON=jupyter notebook
export PYSPARK_DRIVER_PYTHON_OPTS=notebook


# Anaconda python
# added by Anaconda3 2018.12 installer
# >>> conda init >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$(CONDA_REPORT_ERRORS=false '/home/ueiciowr/anaconda3/bin/conda' shell.bash hook 2> /dev/null)"
if [ $? -eq 0 ]; then
    \eval "$__conda_setup"
else
    if [ -f "/home/ueiciowr/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/home/ueiciowr/anaconda3/etc/profile.d/conda.sh"
        CONDA_CHANGEPS1=false conda activate base
    else
        \export PATH="/home/ueiciowr/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda init <<<

