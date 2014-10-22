<?php

namespace GruntPdepend\Ignore;

class Ignore
{

    private $aPrivateVar;

    public function __construct($aVar)
    {
        $this->aPrivateVar = $aVar;
    }

    public function sayWhat()
    {
        return "What";
    }

    public function sayWhatAgain()
    {
        return "What";
    }
}
